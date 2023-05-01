package br.edu.utfpr.pb.pw25s.server.service;

import br.edu.utfpr.pb.pw25s.server.model.Transaction;
import br.edu.utfpr.pb.pw25s.server.repository.TransactionRepository;
import br.edu.utfpr.pb.pw25s.server.service.interfaces.TransactionServiceInterface;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class TransactionService extends CrudService<Transaction, Long> implements TransactionServiceInterface {

    private static TransactionRepository transactionRepository;

    public TransactionService(TransactionRepository transactionRepository){
        this.transactionRepository = transactionRepository;
    }

    @Override
    protected JpaRepository<Transaction, Long> getRepository() {
        return this.transactionRepository;
    }
}
