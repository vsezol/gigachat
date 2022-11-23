


pluginManagement {
  val springBootVersion: String by settings
  val dependencyManagementVersion: String by settings
  val kotlinJvmVersion: String by settings
  val kotlinSpringVersion: String by settings
  plugins {
    id("org.springframework.boot") version springBootVersion
    id("io.spring.dependency-management") version dependencyManagementVersion
    id("org.jetbrains.kotlin.jvm") version kotlinJvmVersion
    id("org.jetbrains.kotlin.plugin.spring") version kotlinSpringVersion
  }
}

rootProject.name = "gigachat"
include("apps:core-messages")

