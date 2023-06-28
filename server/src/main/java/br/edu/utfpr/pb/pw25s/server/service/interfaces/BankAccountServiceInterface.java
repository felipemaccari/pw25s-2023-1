package br.edu.utfpr.pb.pw25s.server.service.interfaces;

import br.edu.utfpr.pb.pw25s.server.dto.BankAccountBalanceDTO;
import br.edu.utfpr.pb.pw25s.server.model.BankAccount;

import java.util.List;

public interface BankAccountServiceInterface extends CrudServiceInterface<BankAccount, Long> {

    List<BankAccountBalanceDTO> getBalances();
}
