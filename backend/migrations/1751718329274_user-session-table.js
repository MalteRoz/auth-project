/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
  pgm.createTable("users", {
    id: "id",
    google_id: {
      type: "varchar(255)",
      notNull: true,
      unique: true,
    },
    username: {
      type: "varchar(45)",
      notNull: true,
      unique: true,
    },
    createdAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
    updatedAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });

  pgm.createTable("sessions", {
    id: "id",
    user_id: {
      type: "integer",
      notNull: true,
      references: '"users"',
      onDelete: "CASCADE",
    },
    session_start: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
    session_end: {
      type: "timestamp",
      notNull: true,
    },
    session_active: {
      type: "boolean",
      default: true,
    },
    ip: {
      type: "varchar(255)",
      notNull: true,
    },
    token: { type: "varchar(255)", notNull: true, unique: true },
    token_expire: { type: "timestamp", notNull: true },
    logout_action: { type: "varchar(255)" },
  });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
  pgm.dropTable("sessions");
  pgm.dropTable("users");
};
