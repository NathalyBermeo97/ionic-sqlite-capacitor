import { WebPlugin } from '@capacitor/core';
import { CapacitorSQLitePlugin, capEchoOptions, capSQLiteOptions, capSQLiteExecuteOptions, capSQLiteSetOptions, capSQLiteRunOptions, capSQLiteQueryOptions, capSQLiteImportOptions, capSQLiteExportOptions, capSQLiteSyncDateOptions, capEchoResult, capSQLiteResult, capSQLiteChanges, capSQLiteValues, capSQLiteJson, capSQLiteUpgradeOptions } from './definitions';
export declare class CapacitorSQLiteWeb extends WebPlugin implements CapacitorSQLitePlugin {
    constructor();
    echo(options: capEchoOptions): Promise<capEchoResult>;
    open(options: capSQLiteOptions): Promise<capSQLiteResult>;
    close(options: capSQLiteOptions): Promise<capSQLiteResult>;
    execute(options: capSQLiteExecuteOptions): Promise<capSQLiteChanges>;
    executeSet(options: capSQLiteSetOptions): Promise<capSQLiteChanges>;
    run(options: capSQLiteRunOptions): Promise<capSQLiteChanges>;
    query(options: capSQLiteQueryOptions): Promise<capSQLiteValues>;
    isDBExists(options: capSQLiteOptions): Promise<capSQLiteResult>;
    deleteDatabase(options: capSQLiteOptions): Promise<capSQLiteResult>;
    isJsonValid(options: capSQLiteImportOptions): Promise<capSQLiteResult>;
    importFromJson(options: capSQLiteImportOptions): Promise<capSQLiteChanges>;
    exportToJson(options: capSQLiteExportOptions): Promise<capSQLiteJson>;
    createSyncTable(): Promise<capSQLiteChanges>;
    setSyncDate(options: capSQLiteSyncDateOptions): Promise<capSQLiteResult>;
    addUpgradeStatement(options: capSQLiteUpgradeOptions): Promise<capSQLiteResult>;
}
declare const CapacitorSQLite: CapacitorSQLiteWeb;
export { CapacitorSQLite };
