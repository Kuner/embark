import { Logger } from "./logger";

export interface Events {
  on: any;
  request: any;
  emit: any;
  once: any;
  setCommandHandler(name: string, callback: (options: any, cb: () => void) => void): void;
}

export interface Config {
  contractsFiles: any[];
  embarkConfig: {
    contracts: string[] | string;
    config: {
      contracts: string;
    };
    versions: {
      solc: string;
    }
  };
  reloadConfig(): void;
}

export interface Embark {
  events: Events;
  registerAPICall: any;
  registerConsoleCommand: any;
  logger: Logger;
  fs: any;
  config: Config;
  registerActionForEvent(name: string, action: (callback: () => void) => void): void;
}
