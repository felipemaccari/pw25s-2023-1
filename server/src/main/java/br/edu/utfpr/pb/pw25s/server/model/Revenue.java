package br.edu.utfpr.pb.pw25s.server.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.util.Date;
@Entity
@Table(name = "revenues")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(of = {"id"})
public class Revenue {
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
    private Date receiptDate;

    @NotNull
    private BigDecimal revenueValue;
}
