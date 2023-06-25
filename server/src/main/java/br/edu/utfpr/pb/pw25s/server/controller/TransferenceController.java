package br.edu.utfpr.pb.pw25s.server.controller;

import br.edu.utfpr.pb.pw25s.server.dto.TransferenceDTO;
import br.edu.utfpr.pb.pw25s.server.model.Transference;
import br.edu.utfpr.pb.pw25s.server.service.CrudService;
import br.edu.utfpr.pb.pw25s.server.service.TransferenceService;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("transferences")
public class TransferenceController extends CrudController<Transference, TransferenceDTO, Long> {

    private static TransferenceService transferenceService;

    private static ModelMapper modelMapper;

    public TransferenceController(TransferenceService transferenceService, ModelMapper modelMapper){
        super(Transference.class, TransferenceDTO.class);
        this.transferenceService = transferenceService;
        this.modelMapper = modelMapper;
    }

    @Override
    protected CrudService<Transference, Long> getService() {
        return this.transferenceService;
    }

    @Override
    protected ModelMapper getModelMapper() {
        return this.modelMapper;
    }
}
