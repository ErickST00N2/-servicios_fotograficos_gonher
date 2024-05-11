class ResponsiveDesign {
    ResponsiveDesign() {}
    // Constantes para anchos de pantalla
    static mobileWidth = 480;
    static tabletWidth = 768;
    static desktopWidth = 950;

    // Constantes para tamaños de pantalla móvil
    static mobileSmall = 320;
    static mobileNormal = 375;
    static mobileLarge = 414;
    static mobileExtraLarge = 480;

    // Constantes para tamaños de pantalla tablet
    static tabletSmall = 600;
    static tabletNormal = 768;
    static tabletLarge = 850;
    static tabletExtraLarge = 900;

    // Constantes para tamaños de pantalla de escritorio
    static desktopSmall = 991;
    static desktopNormal = 1920;
    static desktopLarge = 3840;
    static desktopExtraLarge = 4096;

    // Método para obtener el ancho de la pantalla
    static screenWidth() {
    return window.innerWidth;
    }

    // Método para obtener la altura de la pantalla
    static screenHeight() {
    return window.innerHeight;
    }

    // Método para verificar si el dispositivo es móvil
    static isMobile() {
    const width = this.screenWidth();
    return width < this.tabletSmall;
    }

    // Método para verificar si el dispositivo es tablet
    static isTablet() {
    const width = this.screenWidth();
    return width >= this.tabletSmall && width <= this.desktopSmall;
    }

    // Método para verificar si el dispositivo es de escritorio
    static isDesktop() {
    const width = this.screenWidth();
    return width >= this.desktopSmall;
    }

    // Método para verificar si el dispositivo es móvil o tablet
    static isMobileAndTablet() {
      return this.isMobile() || this.isTablet();
  }
  
}

  // Ejemplo de uso
console.log('Ancho de pantalla:', ResponsiveDesign.screenWidth());
console.log('Altura de pantalla:', ResponsiveDesign.screenHeight());
console.log('Es móvil:', ResponsiveDesign.isMobile());
console.log('Es tablet:', ResponsiveDesign.isTablet());
console.log('Es escritorio:', ResponsiveDesign.isDesktop());

export default ResponsiveDesign;