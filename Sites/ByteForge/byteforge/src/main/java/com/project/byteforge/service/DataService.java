package com.project.byteforge.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.project.byteforge.model.Usuario;

@Service
public class DataService {

    List<Usuario> usuarioList = new ArrayList<>();

    public int add(Usuario usuario){
        try{
            usuarioList.add(usuario);
            return 0;
        }
        catch(Exception e){
            System.out.println(e);
            return 1;
        }
    }

    public boolean verify(Usuario usuario){
        try{
            for(int i = 0; i < usuarioList.size(); i++){
                if(usuarioList.get(i).getLogin().equals(usuario.getLogin()) && usuarioList.get(i).getSenha().equals(usuario.getSenha())){
                    return true;
                }
            }
            return false;


        }
        catch(Exception e){
            return false;
        }

    }

}
