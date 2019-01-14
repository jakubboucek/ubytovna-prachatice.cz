<?php
declare(strict_types=1);

namespace App\Router;

use Nette;
use Nette\Application\Routers\Route;
use Nette\Application\Routers\RouteList;


class RouterFactory
{
    use Nette\StaticClass;


    /**
     * @return RouteList
     * @throws Nette\InvalidArgumentException
     */
    public static function createRouter(): RouteList
    {
        $router = new RouteList;

        $router[] = new Route('<page ubytovani|rezervace|ceny|cenik>.html', 'Static:redirectOld');

        $router[] = new Route('<page [a-z]+>.html', 'Static:default', Route::ONE_WAY);
        $router[] = new Route('[<page [a-z]+>]', 'Static:default');
        return $router;
    }
}
