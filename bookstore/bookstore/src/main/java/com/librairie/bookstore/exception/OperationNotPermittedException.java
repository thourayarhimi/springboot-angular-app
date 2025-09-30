package com.librairie.bookstore.exception;

public class OperationNotPermittedException extends RuntimeException {
    public OperationNotPermittedException(String msg) {

        super(msg);
    }
}
