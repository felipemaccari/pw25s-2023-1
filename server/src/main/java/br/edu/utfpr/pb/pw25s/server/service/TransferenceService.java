package br.edu.utfpr.pb.pw25s.server.service;

import br.edu.utfpr.pb.pw25s.server.model.Transaction;
import br.edu.utfpr.pb.pw25s.server.model.Transference;
import br.edu.utfpr.pb.pw25s.server.repository.TransactionRepository;
import br.edu.utfpr.pb.pw25s.server.repository.TransferenceRepository;
import br.edu.utfpr.pb.pw25s.server.service.interfaces.TransferenceServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class TransferenceService extends CrudService<Transference, Long> implements TransferenceServiceInterface {
    private static TransferenceRepository transferenceRepository;

    private static TransactionRepository transactionRepository;

    public TransferenceService(TransferenceRepository transferenceRepository, TransactionRepository transactionRepository){
        this.transferenceRepository = transferenceRepository;
        this.transactionRepository  = transactionRepository;
    }

    @Override
    protected JpaRepository<Transference, Long> getRepository() {
        return this.transferenceRepository;
    }

    @Override
    public Transference save(Transference transference){
        GenerateTransactionInstance(transference, true);
        GenerateTransactionInstance(transference, false);

        transferenceRepository.save(transference);

        return transference;
    }

    private void GenerateTransactionInstance(Transference transference, Boolean isOrigin) {
        Transaction transactionDestination = new Transaction();
        transactionDestination.setDescription("Transferencia entre contas");
        transactionDestination.setTransactionDate(transference.getTransferenceDate());
        transactionDestination.setEntryDate(transference.getTransferenceDate());
        transactionDestination.setCategory(transference.getCategory());

        if(isOrigin){
            transactionDestination.setBankAccount(transference.getBankAccountOrigin());
            transactionDestination.setTransactionValue(transference.getTransferenceValue().negate());
        } else {
            transactionDestination.setBankAccount(transference.getBankAccountDestination());
            transactionDestination.setTransactionValue(transference.getTransferenceValue());
        }

        transactionRepository.save(transactionDestination);
    }
}
