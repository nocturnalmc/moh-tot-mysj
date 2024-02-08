package org.mysj.models;

@lombok.Data
@lombok.NoArgsConstructor
@lombok.AllArgsConstructor
public class SmsMessage {

    private String phoneNumber;
    private String message;
}
