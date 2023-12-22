# Comandos para comenzar - Desarrollo local - Tipo Biblioteca

## 1- Primero debes crear una cuenta, crear una organización y un scope en bit.cloud, luego te autenticas desde la CLI

```
bit login
```

## 2- Crear un espacio de trabajo para la biblioteca y crear el scope

Si queremos crear varios scopes simplemente ejecutamos este comando con los nombres correspondientes.

```
bit init
bit create react hello-world --scope test-organization-bit.my-scope
```

## 3- Luego deberías corregir el nombre y el defaultScope de tu organización

## 4- Visualizar las versiones y etiquetarlas

```
bit tag
```

## 5- Exportar la biblioteca a bit.cloud

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
