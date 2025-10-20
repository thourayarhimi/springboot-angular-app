package com.librairie.bookstore.use;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor

public class Token {

    @Id
    @GeneratedValue
    private Integer id ;
    private String token;
    private LocalDateTime createdAt;
    private LocalDateTime expiresAt;
    private LocalDateTime validatedAt;


    @ManyToOne
    //@JoinColumn (name ="userId", nullable = false)
    @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = false)

    private User user;



}
