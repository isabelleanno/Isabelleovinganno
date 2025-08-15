<?php

namespace App\EventListener;

use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpFoundation\RedirectResponse;

class CountryListener
{
    public function __invoke(RequestEvent $event): void
    {
        session_start();
        if (!isset($_SESSION['redirected'])) {

            $request = $event->getRequest();
            $locale = $request->getLocale();
            $path = $request->getPathInfo();

            $countryCode = $request->headers->get('CF-IPCountry');
            $countryCode = strtolower($countryCode);

            if ($path !== '/nl' && $countryCode === "nl" && $locale !== "nl") {
                $event->setResponse(new RedirectResponse('/nl'));
            }
            $_SESSION['redirected'] = true;
        }
    }
}
