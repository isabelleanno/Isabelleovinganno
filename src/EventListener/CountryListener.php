<?php

namespace App\EventListener;

use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpFoundation\RedirectResponse;

class CountryListener
{
    public function __invoke(RequestEvent $event): void
    {
        session_start();
        // Ensures redirection happens only once per session
        if (!isset($_SESSION['redirected'])) {

            $request = $event->getRequest();
            $path = $request->getPathInfo();

            $countryCode = $request->headers->get('CF-IPCountry', "NL");
            $countryCode = strtolower($countryCode);

            if ($path !== '/nl' && $countryCode === "nl") {
                $event->setResponse(new RedirectResponse('/nl'));
            }
            $_SESSION['redirected'] = true;
        }
    }
}
