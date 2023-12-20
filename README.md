# Comandos para comenzar - DESARROLLO LOCAL - Tipo Monorepo

## 1- Primero debes crearte cuenta, crear una organizacion y un space en bit.cloud, luego te logeas desde la CLI

```
bit login
```

## 2- Crear un workspace para la liberia y crear el scope

Si queremos crear varios scope simplemente corremos este comando con los nombres correspondientes.

```
bit init
bit create react hello-world --scope test-organization-bit.my-scope
```

## 3- Luego deberias corregir el name y el defaultScope de tu workspace

## 4- Visualizar las versiones, y tagearlo

```
bit tag
```

## 5- Exportar la libreria

```
bit export
```

## 6- Para instalarla en un proyecto aparte con este comando:

```
bit install @test-organization-bit/my-scope.hello-world
npm i @test-organization-bit/my-scope.hello-world
yarn add @test-organization-bit/my-scope.hello-world
pnpm i @test-organization-bit/my-scope.hello-world
```
