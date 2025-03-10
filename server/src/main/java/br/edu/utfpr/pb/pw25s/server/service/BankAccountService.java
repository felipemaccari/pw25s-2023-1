package br.edu.utfpr.pb.pw25s.server.service;

import br.edu.utfpr.pb.pw25s.server.dto.BankAccountBalanceDTO;
import br.edu.utfpr.pb.pw25s.server.model.BankAccount;
import br.edu.utfpr.pb.pw25s.server.repository.BankAccountRepository;
import br.edu.utfpr.pb.pw25s.server.service.interfaces.BankAccountServiceInterface;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BankAccountService extends CrudService<BankAccount, Long> implements BankAccountServiceInterface {

    private static BankAccountRepository bankAccountRepository;

    public BankAccountService(BankAccountRepository bankAccountRepository){
        this.bankAccountRepository = bankAccountRepository;
    }

    @Override
    protected JpaRepository<BankAccount, Long> getRepository() {
        return this.bankAccountRepository;
    }

    public List<BankAccountBalanceDTO> getBalances() {
        List<BankAccountBalanceDTO> balance = bankAccountRepository.getBalances();
        return balance;
    }
}
