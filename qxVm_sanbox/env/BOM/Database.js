openDatabase = undefined;

; (function () {
    SQLResultSetRowList = function SQLResultSetRowList(createObj_key, rows) {
        if (createObj_key !== lwVm.memory.$createObj_key) {
            throw new TypeError("Illegal constructor");
        }
        lwVm.memory.private_data.set(this, {
            rows: rows,
            length: rows.length
        })
    }; lwVm.safefunction(SQLResultSetRowList);

    ; (function () {
        const $safe_get_attribute = ['length'];
        const $safe_set_attribute = [];
        const $safe_func_attribute = ['item'];
        SQLResultSetRowList.prototype = {
            item() {
                if (!SQLResultSetRowList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.memory.private_data.get(this).rows;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'SQLResultSetRowList', 'item', arguments, result);
            return result;
            },
            get length() {
                if (!SQLResultSetRowList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).length, 0);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SQLResultSetRowList', 'length', arguments, result);
            return result;
            },
        }
        lwVm.rename(SQLResultSetRowList.prototype, "SQLResultSetRowList");
        lwVm.safeDescriptor_addConstructor(SQLResultSetRowList);
        lwVm.safe_Objattribute(SQLResultSetRowList, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
    })();

    // -----------------------------------------------------------SQLResultSet----------------------------------------------------------------
    SQLResultSet = function SQLResultSet(createObj_key) {
        if (createObj_key !== lwVm.memory.$createObj_key) {
            throw new TypeError("Illegal constructor");
        }
        lwVm.memory.private_data.set(this, {})
    }; lwVm.safefunction(SQLResultSet);

    ; (function () {
        const $safe_get_attribute = ['insertId', 'rows', 'rowsAffected'];
        const $safe_set_attribute = [];
        const $safe_func_attribute = [];

        SQLResultSet.prototype = {
            get insertId() {
                if (!SQLResultSet.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).insertId, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SQLResultSet', 'insertId', arguments, result);
            return result;
            },
            get rows() {
                if (!SQLResultSet.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };

                // let sql_result_row_list = new SQLResultSetRowList(lwVm.memory.$createObj_key, {"value": window.sql_values});
            let result = { "value": "0" };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SQLResultSet', 'rows', arguments, result);
            return result;
            },
            get rowsAffected() {
                if (!SQLResultSet.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).rowsAffected, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SQLResultSet', 'rowsAffected', arguments, result);
            return result;
            },
        }
        lwVm.rename(SQLResultSet.prototype, "SQLResultSet");
        lwVm.safeDescriptor_addConstructor(SQLResultSet);
        lwVm.safe_Objattribute(SQLResultSet, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    })();

    // -----------------------------------------------------------SQLTransaction----------------------------------------------------------------
    SQLTransaction = function SQLTransaction(createObj_key) {
        if (createObj_key !== lwVm.memory.$createObj_key) {
            throw new TypeError("Illegal constructor");
        }
        lwVm.memory.private_data.set(this, {})
    }; lwVm.safefunction(SQLTransaction);

    ; (function () {
        const $safe_get_attribute = [];
        const $safe_set_attribute = [];
        const $safe_func_attribute = ['executeSql'];

        SQLTransaction.prototype = {
            executeSql(sql, arg, succrssCallback, errorCallback) {
                if (!SQLTransaction.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
                try {

                } catch (error) {
            let result = errorCallback(this, sql_result);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'SQLTransaction', '} catch ', arguments, result);
            return result;
                }
                let sql_result = new SQLResultSet(lwVm.memory.$createObj_key);
            let result = succrssCallback(this, sql_result);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'SQLTransaction', '} catch ', arguments, result);
            return result;
            }
        }
        lwVm.rename(SQLTransaction.prototype, "SQLTransaction");
        lwVm.safeDescriptor_addConstructor(SQLTransaction);
        lwVm.safe_Objattribute(SQLTransaction, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
    })();



    // -----------------------------------------------------------Database----------------------------------------------------------------
    let buffer_memory = {}  // 保存创建的数据库连接


    Database = function Database(createObj_key, version) {
        if (createObj_key !== lwVm.memory.$createObj_key) {
            throw new TypeError("Illegal constructor");
        }
        lwVm.memory.private_data.set(this, {
            version: version
        })
    }; lwVm.safefunction(Database);

    ; (function () {
        const $safe_get_attribute = ['version'];
        const $safe_set_attribute = [];
        const $safe_func_attribute = ['changeVersion', 'readTransaction', 'transaction'];
        Database.prototype = {
            changeVersion(old_version, new_version) {
                if (!Database.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
                let this_info = lwVm.memory.private_data.get(this);
                if (old_version == this_info.version) {
                    this_info.version = new_version;
                }
            },
            readTransaction(func) {
                if (!Database.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Database', 'readTransaction', arguments, result);
            return result;
            },
            transaction(func) {
                if (!Database.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
                let sql_tran = new SQLTransaction(lwVm.memory.$createObj_key);
            let result = func(sql_tran);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Database', 'transaction', arguments, result);
            return result;
            },
            get version() {
                if (!Database.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
                return lwVm.abs(lwVm.memory.private_data.get(this).version, "");
            }
        }
        lwVm.rename(Database.prototype, "Database");
        lwVm.safeDescriptor_addConstructor(Database);
        lwVm.safe_Objattribute(Database, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    })();


    openDatabase = function openDatabase(name, version, desc, size, callback) {

        let db = buffer_memory[name];
        if (db) {
            let result = db;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Database', 'if ', arguments, result);
            return result;
        }
        db = new Database(lwVm.memory.$createObj_key, version);
        buffer_memory[name] = db;

        return db;
    };

})();

