package br.edu.utfpr.pb.pw25s.server.dto;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.util.Date;

@Data
public class TransactionDTO {
    private long id;
    @NotNull
    @Size(min = 2, max = 255)
    private String description;

    @NotNull
    private Date entryDate;

    private Date transactionDate;

    @NotNull
    private BigDecimal transactionValue;

    @NotNull
    private CategoryDTO category;

    @NotNull
    private BankAccountDTO bankAccount;
}