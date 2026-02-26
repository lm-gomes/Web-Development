package com.project.byteforge.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;


import com.project.byteforge.model.RequestResponse;
import com.project.byteforge.model.Usuario;
import com.project.byteforge.service.DataService;

import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class LoginController {

    List<Usuario> users = new ArrayList<>();

    @Autowired
    DataService dataService = new DataService();

    @PostMapping("/login")
    public RequestResponse login(@RequestBody Usuario request){
        if (dataService.verify(request)) {
            return new RequestResponse("Login bem-sucedido!", true);
        } else {
            return new RequestResponse("Login ou senha incorretos.", false);
        }
    }

    @PostMapping("/register")
    public RequestResponse register(@RequestBody Usuario request){
        if(dataService.add(request) == 0){
            return new RequestResponse("Registro feito!", true);
        }
        else{
            return new RequestResponse("Ocorreu um erro no registro", false);
        }
    }
    
    

}
