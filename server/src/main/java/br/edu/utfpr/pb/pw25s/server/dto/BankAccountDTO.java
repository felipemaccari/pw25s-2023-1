package br.edu.utfpr.pb.pw25s.server.dto;

import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigDecimal;

@Data
public class BankAccountDTO {
    private long id;

    @NotNull
    @Size(min = 2, max = 256)
    private String description;

    @Size(min = 2, max = 256)
    private String agency;

    @Size(min = 2, max = 256)
    private String account;

    @NotNull
    private BigDecimal initialBalance;
}
