package br.edu.utfpr.pb.pw25s.server.controller;

import br.edu.utfpr.pb.pw25s.server.dto.BankAccountBalanceDTO;
import br.edu.utfpr.pb.pw25s.server.dto.UserDTO;
import br.edu.utfpr.pb.pw25s.server.dto.UserProfileDTO;
import br.edu.utfpr.pb.pw25s.server.model.User;
import br.edu.utfpr.pb.pw25s.server.service.CrudService;
import br.edu.utfpr.pb.pw25s.server.service.UserService;
import br.edu.utfpr.pb.pw25s.server.shared.GenericResponse;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("users")
public class UserController {

    private final UserService userService;
    private final ModelMapper modelMapper;

    public UserController(UserService userService, ModelMapper modelMapper) {
        this.userService = userService;
        this.modelMapper = modelMapper;
    }

    @PostMapping
    public GenericResponse save(@Valid @RequestBody UserDTO user) {
        User userEntity = modelMapper.map(user, User.class);
        userService.save(userEntity);

        GenericResponse genericResponse = new GenericResponse();
        genericResponse.setMessage("User saved.");
        return genericResponse;
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserProfileDTO> getUserById(@Valid @PathVariable Long id){
        ModelMapper modelMapper = new ModelMapper();

        User user =  userService.findOne(id);

        UserProfileDTO userProfileDTO = modelMapper.map(user, UserProfileDTO.class);

        return ResponseEntity.ok(userProfileDTO);
    }

    @PutMapping("/{id}")
    public GenericResponse updateUser(@Valid @RequestBody UserDTO user, @PathVariable Long id) {
        User userToUpdate = userService.findOne(id);

        userToUpdate.setUsername(user.getUsername());
        userToUpdate.setDisplayName(user.getDisplayName());
        userToUpdate.setPassword(user.getPassword());
        userToUpdate.setId(id);

        userService.save(userToUpdate);

        GenericResponse genericResponse = new GenericResponse();
        genericResponse.setMessage("User saved.");
        return genericResponse;
    }
}