package com.project.byteforge.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.byteforge.model.LoginRequest;
import com.project.byteforge.model.LoginResponse;
import com.project.byteforge.model.Usuario;
import com.project.byteforge.service.DataService;

import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class LoginController {

    List<Usuario> users = new ArrayList<>();

    @Autowired
    DataService dataService = new DataService();

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request){
        if ("admin".equals(request.getLogin()) && "123".equals(request.getSenha())) {
            return new LoginResponse("Login bem-sucedido!", true);
        } else {
            return new LoginResponse("Login ou senha incorretos.", false);
        }
    }

    
    

}
