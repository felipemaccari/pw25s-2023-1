package br.edu.utfpr.pb.pw25s.server.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigDecimal;

@Entity
@Table(name = "bankAccount")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(of = {"id"})
public class BankAccount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    @Size(min = 2, max = 256)
    @Column(length = 256, nullable = false)
    private String description;

    @NotNull
    @Size(min = 2, max = 10)
    @Column(length = 10, nullable = false)
    private String agency;

    @NotNull
    @Size(min = 2, max = 256)
    @Column(length = 256, nullable = false)
    private String account;

    @NotNull
    @Column(nullable = false)
    private BigDecimal initialBalance;
}
