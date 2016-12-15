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
define('DB_NAME', 'kapil');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

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
define('AUTH_KEY',         'w,$ OCWl*DfYY*9A~)lh(_C&ltC8ez7*GOHe8mOC/McOo`]G_X`529Y@]_=K^-^N');
define('SECURE_AUTH_KEY',  'kl6Wr$tEW@>k2tB!]iqH5BVzhvh,o[NRss:H#`5Rg[K0KM]J0R`ANO]Z}b:?^l)=');
define('LOGGED_IN_KEY',    'MNY2RIQ7lTgAZ=;y,P@~Ezt49obijsYT{v2R53mX><#vg%E`b3,)KNxz!nM7,suB');
define('NONCE_KEY',        'g}KG:UBc3$*vbwWdrs+7{NgNFUS s/I{J^We P~>U`tf)>+q/1E@7]rbqf$T ?kq');
define('AUTH_SALT',        '{ky6&VS0H1]2);^aZ)@*tv$zR1pA~6:uSECZ6IfK<7<r.X$]jwo2IkV,*`9*:sBx');
define('SECURE_AUTH_SALT', 'hh!nw:u$A6Eezrn5xn;sp<Fl<Kp$Gm[VZks/C(RbQ<XQloZzu]@6:bIdVWRM8?e4');
define('LOGGED_IN_SALT',   'SAVL962Zh=W2%4rkX`HCusP,^ht[zu)K^n-e|`I |9Nb@Xsr/O^/;<&=s$nGt<a9');
define('NONCE_SALT',       'w#qXcX;V_$oU,A%wkNQBo1p@B-I4K@m6V]5iJkLGn{-mxsKG6cxB>3pgj9p2V)T_');

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
