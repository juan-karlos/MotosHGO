CREATE DATABASE IF NOT EXISTS moto_express;
use Moto_Express;

Create Table Moto
(
	Id_Moto INT NOT NULL AUTO_INCREMENT,
	Marca varchar (25) not null,
	Modelo varchar (20) not null,
	Cilindraje int not null,
	Tipo_Motor varchar (43)not null,
	Capacidad_Tanque varchar (30) not null,
	Transmision varchar (40) not null,
	Kilometraje int not null,
	Freno_delante varchar (30) not null,
	Freno_trasero varchar (30) not null,
	color varchar (20) not null,
	Tipo_arranque varchar (30) not null,
	Precio int not null,
    primary key (Id_Moto)
);

Create Table Sucursal
(
	Id_Sucursal  INT NOT NULL AUTO_INCREMENT,
	Nombre_Sucursal varchar (50) not null,
	Direccion varchar (50) not null,
	Telefono int not null,
    primary key (Id_Sucursal)
);

Create Table Cliente 
(
	Nombre varchar (40) not null,
	Apellidos varchar (60) not null,
	Direccion varchar (30) not null,
	Fecha_nacimiento date not null,
	Telefono int,
	correo varchar (40) not null,
    Contraseña nvarchar(20) not null,
    primary key (correo)
);

Create Table Empleado
(
	Sucursal Nvarchar(20),
	Id_Empleado INT  NOT NULL AUTO_INCREMENT,
	Nombre varchar (40) not null,
	Apellidos varchar (60) not null,
	Direccion varchar (50) not null,
	Fecha_nacimiento date not null,
	Telefono int,
	Correo varchar (40) not null,
    Contraseña nvarchar(20) not null,
    primary key (Id_Empleado)
);

Create Table Proveedor
(
	
	Id_Proveedor INT NOT NULL AUTO_INCREMENT,
	Nombre_Marca Varchar (40) not null,
	Direccion varchar (40) not null,
	Telefono int,
	Correo Varchar (20) not null,
	Proveniencia Varchar (40) not null,
    primary key (Id_Proveedor)
);


Create Table Producto_Adicional
(
	Id_Proveedor int not null,
	Id_Producto INT NOT NULL AUTO_INCREMENT,
	Nombre_producto varchar (50) not null,
	Decripcion varchar (60) not null,
	Precio int not null,
	foreign key (Id_Proveedor)  references Proveedor (Id_Proveedor),
    primary key (Id_Producto)
    
);

Create Table Pedidos
(
	Id_Pedidos INT NOT NULL AUTO_INCREMENT,
	correo varchar (30) not null,
    Id_Moto int not null,
    id_Sucursal int not null,
		foreign key (correo) references Cliente (correo),
		foreign key (Id_Moto) references Moto (Id_Moto),
		foreign key (Id_Sucursal) references Sucursal (Id_Sucursal),
        primary key (Id_Pedidos)
);


