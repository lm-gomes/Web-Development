package com.project.byteforge.controller;

import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class ProductsController {

    @PostMapping("/products")
    public ResponseEntity changeText(@RequestBody Map<String, String> body) {

        System.out.println("Body recebido: " + body);
        String text = body.get("message");
        Map<String, String> response = new HashMap<>();
        if(text.equals("Boa tarde!")){
            response.put("message", "Olá, boa tarde! Em que posso ajudar?");
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.ofNullable(null);

    }
    
}
