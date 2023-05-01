/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.argprograma.Security.jwt;

import com.portfolio.argprograma.Security.Entity.UsuarioPrincipal;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;
import java.util.Date;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

@Component
public class JwtProvider {
    private final static Logger logger = LoggerFactory.getLogger(JwtProvider.class);
    
    @Value("${jwt.secret}")
    private String secret;
    @Value("${jwt.expiration}")
    private int expiration;
    
    public String GenerateToken(Authentication authentication){ 
        UsuarioPrincipal usuarioPrincipal = (UsuarioPrincipal) authentication.getPrincipal();
        return Jwts.builder().setSubject(usuarioPrincipal.getUsername()).setIssuedAt(new Date()).setExpiration(new Date(new Date().getTime()+expiration*1000)).signWith(SignatureAlgorithm.HS512, secret).compact();
    }
    
    public String getNombreUsuarioFromToken(String Token) {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(Token).getBody().getSubject();
    }
    
    public boolean validateToken(String token) { 
        try{ 
            Jwts.parser().setSigningKey(secret).parseClaimsJws(token);
            return true;
        } catch(MalformedJwtException e){
            logger.error("Token mal formado");
        } catch(UnsupportedJwtException e) {
            logger.error("Token no soportado");
        } catch(ExpiredJwtException e) { 
            logger.error("Token expirado");
        } catch(IllegalArgumentException e) { 
            logger.error("Token vacio");
        } catch(SignatureException e) { 
            logger.error("Firma no valida");
        }
        return false;
    }
}
