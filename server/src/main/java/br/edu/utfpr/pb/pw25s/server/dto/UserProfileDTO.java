package br.edu.utfpr.pb.pw25s.server.dto;
import br.edu.utfpr.pb.pw25s.server.annotation.UniqueUsername;
import lombok.Data;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class UserProfileDTO {
    @UniqueUsername
    @NotNull
    @Size(min = 4, max = 50)
    private String username;

    @NotNull
    @Size(min = 4, max = 50)
    private String displayName;

}