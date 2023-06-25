package br.edu.utfpr.pb.pw25s.server.dto;

import br.edu.utfpr.pb.pw25s.server.model.BankAccount;
import br.edu.utfpr.pb.pw25s.server.model.Category;
import lombok.Data;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.util.Date;

@Data
public class TransferenceDTO {

    private long id;

    @NotNull
    @Size(min = 2, max = 255)
    private String description;

    @NotNull
    private Date transferenceDate;

    @NotNull
    private BigDecimal transferenceValue;

    @NotNull
    private Category category;

    @NotNull
    private BankAccount bankAccountOrigin;

    @NotNull
    private BankAccount bankAccountDestination;
}
