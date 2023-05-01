package br.edu.utfpr.pb.pw25s.server.controller;

import br.edu.utfpr.pb.pw25s.server.dto.TransactionDTO;
import br.edu.utfpr.pb.pw25s.server.model.Transaction;
import br.edu.utfpr.pb.pw25s.server.service.CrudService;
import br.edu.utfpr.pb.pw25s.server.service.TransactionService;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("transactions")
public class TransactionController extends CrudController<Transaction, TransactionDTO, Long> {

    private static TransactionService transactionService;

    private static ModelMapper modelMapper;

    public TransactionController(TransactionService transactionService, ModelMapper modelMapper){
        super(Transaction.class, TransactionDTO.class);
        this.transactionService = transactionService;
        this.modelMapper = modelMapper;
    }

    @Override
    protected CrudService<Transaction, Long> getService() {
        return this.transactionService;
    }

    @Override
    protected ModelMapper getModelMapper() {
        return this.modelMapper;
    }
}
