package br.edu.utfpr.pb.pw25s.server.controller;

import br.edu.utfpr.pb.pw25s.server.dto.BankAccountDTO;
import br.edu.utfpr.pb.pw25s.server.model.BankAccount;
import br.edu.utfpr.pb.pw25s.server.service.BankAccountService;
import br.edu.utfpr.pb.pw25s.server.service.CrudService;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
