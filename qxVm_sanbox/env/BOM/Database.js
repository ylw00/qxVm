openDatabase = undefined;

; (function () {
    SQLResultSetRowList = function SQLResultSetRowList(createObj_key, rows) {
        if (createObj_key !== qxVm.memory.$createObj_key) {
            throw new TypeError("Illegal constructor");
        }
        qxVm.memory.private_data.set(this, {
            rows: rows,
            length: rows.length
        })
    }; qxVm.safefunction(SQLResultSetRowList);

    ; (function () {
        const $safe_get_attribute = ['length'];
        const $safe_set_attribute = [];
        const $safe_func_attribute = ['item'];
        SQLResultSetRowList.prototype = {
            item() {
                debugger;
                if (!SQLResultSetRowList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
                return qxVm.memory.private_data.get(this).rows
            },
            get length() {
                debugger;
                if (!SQLResultSetRowList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
                return qxVm.abs(qxVm.memory.private_data.get(this).length, 0);
            },
        }
        qxVm.rename(SQLResultSetRowList.prototype, "SQLResultSetRowList");
        qxVm.safeDescriptor_addConstructor(SQLResultSetRowList);
        qxVm.safe_Objattribute(SQLResultSetRowList, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
    })();

    // -----------------------------------------------------------SQLResultSet----------------------------------------------------------------
    SQLResultSet = function SQLResultSet(createObj_key) {
        if (createObj_key !== qxVm.memory.$createObj_key) {
            throw new TypeError("Illegal constructor");
        }
        qxVm.memory.private_data.set(this, {})
    }; qxVm.safefunction(SQLResultSet);

    ; (function () {
        const $safe_get_attribute = ['insertId', 'rows', 'rowsAffected'];
        const $safe_set_attribute = [];
        const $safe_func_attribute = [];

        SQLResultSet.prototype = {
            get insertId() {
                debugger;
                if (!SQLResultSet.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
                return qxVm.abs(qxVm.memory.private_data.get(this).insertId, "");
            },
            get rows() {
                debugger;
                if (!SQLResultSet.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };

                // let sql_result_row_list = new SQLResultSetRowList(qxVm.memory.$createObj_key, {"value": window.sql_values});
                return { "value": "0" }
            },
            get rowsAffected() {
                debugger;
                if (!SQLResultSet.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
                return qxVm.abs(qxVm.memory.private_data.get(this).rowsAffected, "");
            },
        }
        qxVm.rename(SQLResultSet.prototype, "SQLResultSet");
        qxVm.safeDescriptor_addConstructor(SQLResultSet);
        qxVm.safe_Objattribute(SQLResultSet, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    })();

    // -----------------------------------------------------------SQLTransaction----------------------------------------------------------------
    SQLTransaction = function SQLTransaction(createObj_key) {
        if (createObj_key !== qxVm.memory.$createObj_key) {
            throw new TypeError("Illegal constructor");
        }
        qxVm.memory.private_data.set(this, {})
    }; qxVm.safefunction(SQLTransaction);

    ; (function () {
        const $safe_get_attribute = [];
        const $safe_set_attribute = [];
        const $safe_func_attribute = ['executeSql'];

        SQLTransaction.prototype = {
            executeSql(sql, arg, succrssCallback, errorCallback) {
                debugger;
                if (!SQLTransaction.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
                try {

                } catch (error) {
                    return errorCallback(this, sql_result);
                }
                let sql_result = new SQLResultSet(qxVm.memory.$createObj_key);
                return succrssCallback(this, sql_result)
            }
        }
        qxVm.rename(SQLTransaction.prototype, "SQLTransaction");
        qxVm.safeDescriptor_addConstructor(SQLTransaction);
        qxVm.safe_Objattribute(SQLTransaction, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
    })();



    // -----------------------------------------------------------Database----------------------------------------------------------------
    let buffer_memory = {}  // 保存创建的数据库连接


    Database = function Database(createObj_key, version) {
        if (createObj_key !== qxVm.memory.$createObj_key) {
            throw new TypeError("Illegal constructor");
        }
        qxVm.memory.private_data.set(this, {
            version: version
        })
    }; qxVm.safefunction(Database);

    ; (function () {
        const $safe_get_attribute = ['version'];
        const $safe_set_attribute = [];
        const $safe_func_attribute = ['changeVersion', 'readTransaction', 'transaction'];
        Database.prototype = {
            changeVersion(old_version, new_version) {
                debugger;
                if (!Database.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
                let this_info = qxVm.memory.private_data.get(this);
                if (old_version == this_info.version) {
                    this_info.version = new_version;
                }
            },
            readTransaction(func) {
                debugger;
                if (!Database.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            },
            transaction(func) {
                debugger;
                if (!Database.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
                let sql_tran = new SQLTransaction(qxVm.memory.$createObj_key);
                return func(sql_tran);
            },
            get version() {
                debugger;
                if (!Database.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
                return qxVm.abs(qxVm.memory.private_data.get(this).version, "");
            }
        }
        qxVm.rename(Database.prototype, "Database");
        qxVm.safeDescriptor_addConstructor(Database);
        qxVm.safe_Objattribute(Database, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    })();


    openDatabase = function openDatabase(name, version, desc, size, callback) {
        debugger;

        let db = buffer_memory[name];
        if (db) {
            return db;
        }
        db = new Database(qxVm.memory.$createObj_key, version);
        buffer_memory[name] = db;

        return db;
    };

})();

