<?php

declare(strict_types=1);

namespace App\Presenters;

use Nette;


class StaticPresenter extends Nette\Application\UI\Presenter
{
    private const DEFAULT_PAGE_KEY = 'index';


    /**
     * @param string $page
     */
    public function renderDefault($page = self::DEFAULT_PAGE_KEY): void
    {
        $this->setView($page);
    }


    /**
     * @throws Nette\Application\AbortException
     */
    public function actionRedirectOld(): void
    {
        $this->redirectPermanent('default', ['page'=>self::DEFAULT_PAGE_KEY]);
    }
}
