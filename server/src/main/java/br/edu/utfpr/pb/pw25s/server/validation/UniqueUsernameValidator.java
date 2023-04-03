package br.edu.utfpr.pb.pw25s.server.validation;

import br.edu.utfpr.pb.pw25s.server.annotation.UniqueUsername;
import br.edu.utfpr.pb.pw25s.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class UniqueUsernameValidator implements ConstraintValidator<UniqueUsername, String> {

    @Autowired
    private UserRepository userRepository;

    @Override
    public boolean isValid(String username, ConstraintValidatorContext constraintValidatorContext) {
        if(userRepository.findUserByUsername(username) == null){
            return true;
        }

        return false;
    }
}
