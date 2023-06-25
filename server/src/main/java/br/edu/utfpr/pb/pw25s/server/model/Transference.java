package br.edu.utfpr.pb.pw25s.server.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "transferences")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(of = {"id"})
public class Transference {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private long id;

    @NotNull
    @Size(min = 2, max = 255)
    @Column(nullable = false)
    private String description;

    @Column
    @NotNull
    private Date transferenceDate;

    @NotNull
    private BigDecimal transferenceValue;

    @ManyToOne
    @NotNull
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private Category category;

    @ManyToOne
    @NotNull
    @JoinColumn(name = "bank_account_origin_id", referencedColumnName = "id")
    private BankAccount bankAccountOrigin;

    @ManyToOne
    @NotNull
    @JoinColumn(name = "bank_account_destination_id", referencedColumnName = "id")
    private BankAccount bankAccountDestination;
}
