import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'MiProyecto',
  webDir: 'www' ,
  server: {
   androidScheme: 'http' ,
   cleartext: true

  }
};

export default config;
