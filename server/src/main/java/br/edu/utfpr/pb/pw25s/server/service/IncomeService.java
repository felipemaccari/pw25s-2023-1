package br.edu.utfpr.pb.pw25s.server.service;

import br.edu.utfpr.pb.pw25s.server.model.Income;
import br.edu.utfpr.pb.pw25s.server.repository.IncomeRepository;
import br.edu.utfpr.pb.pw25s.server.service.interfaces.IncomeServiceInterface;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class IncomeService extends CrudService<Income, Long> implements IncomeServiceInterface {

    private static IncomeRepository incomeRepository;

    public IncomeService(IncomeRepository incomeRepository){
        this.incomeRepository = incomeRepository;
    }


    @Override
    protected JpaRepository<Income, Long> getRepository() {
        return this.incomeRepository;
    }
}
