package br.edu.utfpr.pb.pw25s.server.controller;

import br.edu.utfpr.pb.pw25s.server.dto.RevenueDTO;
import br.edu.utfpr.pb.pw25s.server.model.Revenue;
import br.edu.utfpr.pb.pw25s.server.service.CrudService;
import br.edu.utfpr.pb.pw25s.server.service.RevenueService;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("revenues")
public class RevenueController extends CrudController<Revenue, RevenueDTO, Long>{

    private static RevenueService revenueService;

    private static ModelMapper modelMapper;

    public RevenueController(RevenueService revenueService, ModelMapper modelMapper){
        super(Revenue.class, RevenueDTO.class);
        this.revenueService = revenueService;
        this.modelMapper = modelMapper;
    }

    @Override
    protected CrudService<Revenue, Long> getService() {
        return this.revenueService;
    }

    @Override
    protected ModelMapper getModelMapper() {
        return this.modelMapper;
    }
}
