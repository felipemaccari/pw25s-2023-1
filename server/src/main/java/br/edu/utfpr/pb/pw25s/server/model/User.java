package br.edu.utfpr.pb.pw25s.server.model;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class User {

    private String username;
    private String displayName;
    private String password;
}
