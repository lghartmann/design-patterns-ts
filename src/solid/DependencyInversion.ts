interface IDBProduct {
  getProductById(id: number): string;
}

class DbProductFactory {
  private type: MySql | MongoDb | OracleServer | SqlServer;

  constructor(instance: MySql | MongoDb | OracleServer | SqlServer) {
    this.type = instance;
  }

  public create(): IDBProduct {
    if (this.type instanceof MySql) {
      return new MySql();
    } else if (this.type instanceof MongoDb) {
      return new MongoDb();
    } else if (this.type instanceof OracleServer) {
      return new OracleServer();
    } else if (this.type instanceof SqlServer) {
      return new SqlServer();
    }
  }
}

class MySql implements IDBProduct {
  getProductById(id: number): string {
    return `MySqlProduct: ID: ${id}, nome: "SOAP"`;
  }
}

class MongoDb implements IDBProduct {
  getProductById(id: number): string {
    return `MongoDbProduct: ID: ${id}, nome: "SOAP"`;
  }
}

class SqlServer implements IDBProduct {
  getProductById(id: number): string {
    return `SqlServer: ID: ${id}, nome: "SOAP"`;
  }
}

class OracleServer implements IDBProduct {
  getProductById(id: number): string {
    return `OracleServer: ID: ${id}, nome: "SOAP"`;
  }
}

class Payment {
  pay(productId: number): void {
    const dbProduct = new DbProductFactory(new MySql());
    const conn = dbProduct.create();

    const product = conn.getProductById(productId);

    console.log(product);
  }
}

const payment = new Payment();
payment.pay(200);
