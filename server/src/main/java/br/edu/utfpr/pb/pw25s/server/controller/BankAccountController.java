package br.edu.utfpr.pb.pw25s.server.controller;

import br.edu.utfpr.pb.pw25s.server.dto.BankAccountBalanceDTO;
import br.edu.utfpr.pb.pw25s.server.dto.BankAccountDTO;
import br.edu.utfpr.pb.pw25s.server.model.BankAccount;
import br.edu.utfpr.pb.pw25s.server.service.BankAccountService;
import br.edu.utfpr.pb.pw25s.server.service.CrudService;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("bank-accounts")
public class BankAccountController extends CrudController<BankAccount, BankAccountDTO, Long> {

    private static BankAccountService bankAccountService;

    private static ModelMapper modelMapper;

    public BankAccountController(BankAccountService bankAccountService, ModelMapper modelMapper){
        super(BankAccount.class, BankAccountDTO.class);
        this.bankAccountService = bankAccountService;
        this.modelMapper = modelMapper;
    }

    @Override
    protected CrudService<BankAccount, Long> getService() {
        return this.bankAccountService;
    }

    @Override
    protected ModelMapper getModelMapper() {
        return this.modelMapper;
    }

    @GetMapping("/balances")
    public ResponseEntity<List<BankAccountBalanceDTO>> getBalances(){
        List<BankAccountBalanceDTO> accounts = bankAccountService.getBalances();

        return ResponseEntity.ok(accounts);
    }
}