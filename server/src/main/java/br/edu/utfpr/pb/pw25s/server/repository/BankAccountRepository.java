package br.edu.utfpr.pb.pw25s.server.repository;

import br.edu.utfpr.pb.pw25s.server.dto.BankAccountBalanceDTO;
import br.edu.utfpr.pb.pw25s.server.model.BankAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BankAccountRepository extends JpaRepository<BankAccount, Long> {

    @Query("SELECT bankAccount.description, bankAccount.initialBalance FROM BankAccount bankAccount LEFT JOIN Transaction transactions ON bankAccount.id = transactions.bankAccount.id GROUP BY bankAccount.id")
    List<BankAccountBalanceDTO> getBalances();
}
