package br.edu.utfpr.pb.pw25s.server.service;

import br.edu.utfpr.pb.pw25s.server.model.Revenue;
import br.edu.utfpr.pb.pw25s.server.repository.RevenueRepository;
import br.edu.utfpr.pb.pw25s.server.service.interfaces.RevenueServiceInterface;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class RevenueService extends CrudService<Revenue, Long> implements RevenueServiceInterface {

    private static RevenueRepository revenueRepository;

    public RevenueService(RevenueRepository revenueRepository) {
        this.revenueRepository = revenueRepository;
    }

    @Override
    protected JpaRepository<Revenue, Long> getRepository() {
        return revenueRepository;
    }
}