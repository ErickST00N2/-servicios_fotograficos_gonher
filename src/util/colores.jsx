class Colores {
    // Propiedad estática para mantener la única instancia de la clase
    static instance = null;

    // Propiedades de colores
    rojo;
    verdeFuerte;
    verdeDebil;
    naranja;
    gris;

    // Constructor privado para evitar la instanciación directa
    constructor() {
        // Verifica si ya hay una instancia de Colores
        if (Colores.instance) {
            return Colores.instance;
        }

        // Inicializa las propiedades con sus valores
        this.rojo = '#D9303E';
        this.verdeFuerte = '#307347';
        this.verdeDebil = '#C4F2C7';
        this.naranja = '#F28705';
        this.gris = '#F2F2F2';

        // Guarda esta instancia como la única instancia de la clase
        Colores.instance = this;
    }

    // Método estático para obtener la única instancia de la clase
    static getInstance() {
        if (!Colores.instance) {
            // Si no existe una instancia, crea una nueva
            Colores.instance = new Colores();
        }
        // Devuelve la única instancia
        return Colores.instance;
    }
}

// Exporta la clase Colores como exportación predeterminada
export default Colores;
