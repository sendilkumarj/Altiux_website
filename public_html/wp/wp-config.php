<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'altiux_wp544');

/** MySQL database username */
define('DB_USER', 'altiux_wp544');

/** MySQL database password */
define('DB_PASSWORD', 'L1!XS4!0P5');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '9ed7bzjnxa44qwg9r6raafizfdn6koxv2dcnv1gsedlnhmdkapjvi53dgdyhdt7o');
define('SECURE_AUTH_KEY',  'ao90qtfs6rbiddgn6z7vq8cqlfh1shqlbgepfdfxcwlacqkezpe8zlte2p5vjtkf');
define('LOGGED_IN_KEY',    '7lcjlgavneifospd3y7mldmsuiq2h4nfirmevpu8sbseugx4cpfqj8xfr4lqmuvz');
define('NONCE_KEY',        '1qibnawoupggnacaw9bha4ptprnho3kj8g1oln1wu7xlmyg2soq7jzlovenifpdk');
define('AUTH_SALT',        'adkqdjroubk9ap3xtivju1hcrlelncbzqecglcafo1q40ugpzuiy3ydh1z2lkhv8');
define('SECURE_AUTH_SALT', 'hdvtr2s6ntidlboqffpnmwv6jna0znoea9tmpwsfehanvjlhbawlfgjnlwyb9kla');
define('LOGGED_IN_SALT',   '0fxiggl6agwaunvgrnjykh4bi07m05grsnbzgz5ucipv5s8inoucetkx3vwulxem');
define('NONCE_SALT',       'db4dtx3hyxgtpanjq4hzyd0byfjqhfidbagpclos9jvjviuexjfzg8gy9rxjfjoa');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
