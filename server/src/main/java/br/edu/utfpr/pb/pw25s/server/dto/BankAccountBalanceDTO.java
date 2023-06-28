package br.edu.utfpr.pb.pw25s.server.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigDecimal;

@Data
public class BankAccountBalanceDTO {
    @NotNull
    @Size(min = 2, max = 256)
    private String description;

    private BigDecimal initialBalance;
}
