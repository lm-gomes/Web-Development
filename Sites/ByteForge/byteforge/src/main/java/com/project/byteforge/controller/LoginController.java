package com.project.byteforge.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.byteforge.model.LoginRequest;
import com.project.byteforge.model.LoginResponse;

import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class LoginController {
    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request){
        if ("admin".equals(request.getLogin()) && "123".equals(request.getSenha())) {
            return new LoginResponse("Login bem-sucedido!", true);
        } else {
            return new LoginResponse("Login ou senha incorretos.", false);
        }
    }

}
