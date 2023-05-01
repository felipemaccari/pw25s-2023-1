package br.edu.utfpr.pb.pw25s.server.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "transactions")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(of = {"id"})
public class Transaction {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private long id;

    @NotNull
    @Size(min = 2, max = 255)
    @Column(nullable = false)
    private String description;

    @Column()
    @NotNull
    private Date entryDate;

    @Column
    private Date transactionDate;

    @NotNull
    private BigDecimal transactionValue;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private Category category;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "bank_account_id", referencedColumnName = "id")
    private BankAccount bankAccount;
}
