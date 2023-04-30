package br.edu.utfpr.pb.pw25s.server.controller;

import br.edu.utfpr.pb.pw25s.server.dto.IncomeDTO;
import br.edu.utfpr.pb.pw25s.server.model.Income;
import br.edu.utfpr.pb.pw25s.server.service.CrudService;
import br.edu.utfpr.pb.pw25s.server.service.IncomeService;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/incomes")
public class IncomeController extends CrudController<Income, IncomeDTO, Long> {
    private static IncomeService incomeService;

    private static ModelMapper modelMapper;

    public IncomeController(IncomeService incomeService, ModelMapper modelMapper){
        super(Income.class, IncomeDTO.class);
        this.incomeService = incomeService;
        this.modelMapper = modelMapper;
    }

    @Override
    protected CrudService<Income, Long> getService() {
        return this.incomeService;
    }

    @Override
    protected ModelMapper getModelMapper() {
        return this.modelMapper;
    }
}
