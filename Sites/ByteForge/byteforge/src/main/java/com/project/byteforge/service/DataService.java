package com.project.byteforge.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.project.byteforge.model.Usuario;

@Service
public class DataService {

    List<Usuario> usuarioList = new ArrayList<>();

    public void add(Usuario usuario){
        usuarioList.add(usuario);
    }

}
