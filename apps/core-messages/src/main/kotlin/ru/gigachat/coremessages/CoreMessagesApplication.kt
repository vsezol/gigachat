package ru.gigachat.coremessages

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication(scanBasePackages = arrayOf("ru.gigachat"))
class CoreMessagesApplication

fun main(args: Array<String>) {
  runApplication<CoreMessagesApplication>(*args)
}


